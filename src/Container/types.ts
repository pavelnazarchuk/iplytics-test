import { AxiosResponse } from 'axios';
import giphyApi, { MultiResponse } from 'giphy-api';

export type GetGif = (q: string, offset: number, limit: number) => Promise<AxiosResponse<MultiResponse>>;

export interface IState {
    offset: number;
    totalCount: number;
    searchQuery: string;
    limit: number;
    images: giphyApi.GIFObject[];
    error?: boolean | null;
}