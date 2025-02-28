import { hello2 } from '@example/lib2';

export function hello1() {
    console.log('hello from lib1');
    hello2();
}