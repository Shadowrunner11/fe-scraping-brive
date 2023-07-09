import { AxiosInstance } from "axios";
import {
  PaginatedFilters,
  PaginatedResponse,
  SearchParams,
  SearchResponse,
} from "./types";

export class SearchFacade {
  constructor(private client: AxiosInstance) {}

  async searchScrap({ text }: SearchParams) {
    const { data } = await this.client.post<SearchResponse>("/search", {
      text,
    });

    return data;
  }

  async searchHistoryPaginated(filters: PaginatedFilters) {
    const { data } = await this.client.get<PaginatedResponse<SearchResponse>>(
      "/history",
      {
        params: filters,
      },
    );

    return data;
  }
}
