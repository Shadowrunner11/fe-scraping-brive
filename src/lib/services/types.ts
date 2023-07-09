export interface SearchParams {
  text: string;
}

export interface SearchResponse {
  id: number;
  totalJobs: number;
  companyName: string;
  createdAt: string;
}

export interface PaginatedInfo {
  next?: number;
  prev?: number;
  total: number;
}

export interface PaginatedResponse<T> {
  info: PaginatedInfo;
  results: T[];
}

export interface PaginatedFilters {
  createdAt?: string;
  companyName?: string;
  page?: number;
}
