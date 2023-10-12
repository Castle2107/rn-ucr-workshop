export interface APIClient {
  request<T>(request: Request): Promise<T>;
}

export type HTTP_METHOD = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface Request {
  method: HTTP_METHOD;
  url: string;
  params?: Record<string, any>;
  body?: Record<string, any>;
}

interface APIConfig {
  baseUrl: string;
  headers?: Record<string, string>;
}

export class NetworkClient implements APIClient {
  private config: APIConfig;

  constructor(config: APIConfig) {
    this.config = config;
  }

  private buildUrl = (request: Request): string => {
    let apiUrl = this.config.baseUrl + request.url;
    if (request.params) {
      const queryParams = new URLSearchParams(request.params);
      apiUrl += `?${queryParams.toString()}`;
    }

    return apiUrl;
  };

  private buildRequestInit = (request: Request): RequestInit => {
    const headers = {
      'Content-Type': 'application/json',
      ...this.config.headers,
    };

    const requestInit: RequestInit = {
      method: request.method,
      headers,
    };

    if (request.body) {
      requestInit.body = JSON.stringify(request.body);
    }

    return requestInit;
  };

  private handleResponse = async <T>(response: Response): Promise<T> => {
    if (!response.ok) {
      throw new Error('Network request failed');
    }
    const contentType = response.headers.get('Content-Type');
    if (contentType && contentType.includes('application/json')) {
      return response.json();
    }
    throw new Error('Invalid response format');
  };

  request = async <T>(request: Request): Promise<T> => {
    const apiUrl = this.buildUrl(request);
    const requestInit = this.buildRequestInit(request);
    const response = await fetch(apiUrl, requestInit);
    return this.handleResponse<T>(response);
  };
}

export const PokedexClient = new NetworkClient({
  baseUrl: 'https://pokeapi.co/api/v2/',
});
