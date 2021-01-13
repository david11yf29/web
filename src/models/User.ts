interface UserProps {
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: UserProps) {}

  get(proprName: string): (number | string) {
    return this.data[proprName];
  };

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}