export interface Validator<T> {
  validate: (x: T) => boolean;
  errorMessage?: string;
}
