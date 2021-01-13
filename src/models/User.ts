interface UserProps {
  name?: string;
  age?: number;
};

type Callback = () => void;

export class User {

  events: { [key: string]: Callback[] } = {};
  // this.events['asdf'] = []

  constructor(private data: UserProps) {}

  get(proprName: string): (number | string) {
    return this.data[proprName];
  };

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach(callback => {
      callback();
    })
  }
}