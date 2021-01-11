import {Dispatch} from 'react';
import CreateDataContext from './CreateDataContext';
import {MovieActionType} from './type';
import {Movie, SearchResponse} from '@types';
import {api} from '../api';

type SystemState = {
  isLoading: boolean;
  movieList: Movie[];
};

type SystemAction = {
  type: MovieActionType;
  payload?: any;
};

const initialState: SystemState = {
  isLoading: false,
  movieList: [],
};

const movieReducer = (state: SystemState, action: SystemAction) => {
  switch (action.type) {
    case MovieActionType.GET_MOVIE_LIST:
      return {
        ...state,
        movieList: action.payload.data,
        isLoading: false,
      };
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
