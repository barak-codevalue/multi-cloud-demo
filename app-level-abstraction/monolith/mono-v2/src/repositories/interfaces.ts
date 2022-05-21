export interface Repository<T> {
  create(item: T): Promise<T>;
}
