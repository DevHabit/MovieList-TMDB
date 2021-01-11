import {Dispatch} from 'react';
import CreateDataContext from './CreateDataContext';
import {MovieActionType} from './type';
import {Movie, SearchResponse} from '@types';
import {api} from '../api';

type SystemState = {
  isLoading: boolean;
  movieList: Movie[];
  isLoadingMore: boolean;
};

type SystemAction = {
  type: MovieActionType;
  payload?: any;
};

const initialState: SystemState = {
  isLoading: false,
  movieList: [],
  isLoadingMore: false,
};

const movieReducer = (state: SystemState, action: SystemAction) => {
  switch (action.type) {
    case MovieActionType.GET_MOVIE_LIST:
      if (action.payload.newSearch) {
        return {
          ...state,
          movieList: action.payload.data,
          isLoading: false,
          isLoadingMore: action.payload.isLoadingMore,
        };
      } else {
        return {
          ...state,
          movieList: [...state.movieList, ...action.payload.data],
          isLoading: false,
          isLoadingMore: action.payload.isLoadingMore,
        };
      }
    case MovieActionType.ERROR:
      return {...state, isLoading: false, movieList: []};
    case MovieActionType.LOADING:
      return {...state, isLoading: action.payload};
    default:
      return state;
  }
};

const searchMovie = (dispatch: Dispatch<SystemAction>) => {
  return async (query: string, page: number) => {
    try {
      dispatch({type: MovieActionType.LOADING, payload: true});
      const response = await api.get<SearchResponse>('/search/movie', {
        params: {
          query,
          page,
        },
      });
      dispatch({
        type: MovieActionType.GET_MOVIE_LIST,
        payload: {
          data: response.data.results,
          newSearch: page === 1,
          loadingMore: response.data.total_pages > page,
        },
      });
    } catch (err) {
      dispatch({
        type: MovieActionType.ERROR,
        payload: 'Error',
      });
    }
  };
};

export const {Provider, Context} = CreateDataContext(
  movieReducer,
  {searchMovie},
  initialState,
);
