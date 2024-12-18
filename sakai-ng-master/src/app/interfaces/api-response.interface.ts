export interface APIResponse<T> {
    item: T;
    success: boolean;
    error: boolean;
    message: string;
}