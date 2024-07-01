import server from '../server';
import supertest from 'supertest';

const requestWithSupertest = supertest(server);

describe('Items Endpoints', () => {
    describe('GET /items', () => {
        it('Should GET /items should respond with 4 searched item if query is available', async () => {
            const res = await requestWithSupertest.get('/api/items?q=iphone');
            expect(res.status).toEqual(200);
            expect(res.type).toContain('json');
            const responseBody = res.body;
            expect(responseBody.items.length).toBeGreaterThan(0);
            expect(responseBody.items[0].id).toBeDefined();
            expect(responseBody.items[0].title).toBeDefined();
            expect(responseBody.items[0].price).toBeDefined();
        });

        it('Should GET /items should respond with proper breadcrumbs if query is available', async () => {
            const res = await requestWithSupertest.get('/api/items?q=iphone');
            expect(res.status).toEqual(200);
            expect(res.type).toContain('json');
            const responseBody = res.body;
            expect(responseBody.breadcrumbs.length).toBeGreaterThan(0);
            expect(responseBody.breadcrumbs[0].id).toBeDefined();
            expect(responseBody.breadcrumbs[0].name).toBeDefined();
        });

        it('Should GET /items should respond with empty array if query is not available', async () => {
            const res = await requestWithSupertest.get('/api/items');
            expect(res.status).toEqual(400);
            expect(res.type).toContain('json');
            expect(res.body.error).toBe("The following parameter was missing or invalid: \"q\".");
        });

        it('Should GET /items should respond with empty array if query is not available', async () => {
            const res = await requestWithSupertest.get('/api/items?q=asdasda@32;fsdasd');
            expect(res.status).toEqual(200);
            expect(res.type).toContain('json');
            expect(res.body.items.length).toBe(0);
        });
        
    });

    describe('GET /items/:id', () => {
        it('Should GET /items/:id should respond with item details if id is available', async () => {
            const res = await requestWithSupertest.get('/api/items/MLA1374791257');
            expect(res.status).toEqual(200);
            expect(res.type).toContain('json');
            const responseBody = res.body;
            expect(responseBody.item.id).toBeDefined();
            expect(responseBody.item.title).toBeDefined();
            expect(responseBody.item.price).toBeDefined();
            expect(responseBody.picture).toBeDefined();
            expect(responseBody.condition).toBeDefined();
        });

        it('Should GET /items/:id should respond with proper breadcrumbs if id is available', async () => {
            const res = await requestWithSupertest.get('/api/items/MLA1374791257');
            expect(res.status).toEqual(200);
            expect(res.type).toContain('json');
            const responseBody = res.body;
            expect(responseBody.breadcrumbs.length).toBeGreaterThan(0);
            expect(responseBody.breadcrumbs[0].id).toBeDefined();
            expect(responseBody.breadcrumbs[0].name).toBeDefined();
        });

        it('Should GET /items/:id should respond with error if id is not available', async () => {
            const res = await requestWithSupertest.get('/api/items/MLA928234234234');
            expect(res.status).toEqual(404);
            expect(res.type).toContain('json');
            expect(res.body).toBe("Not Found");
        });
    });
  
  });