import { handler } from '../functions/ListTodos.mjs';

describe('list todos', () => {
  test('should return 3 items', async () => {
    const res = await handler();
    const body = JSON.parse(res.body);
    expect(res.statusCode).toBe(200);
    expect(body.length).toBe(3);
  });
});
