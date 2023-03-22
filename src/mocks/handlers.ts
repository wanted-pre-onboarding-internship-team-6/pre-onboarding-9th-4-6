import { rest } from 'msw'

const API_URL = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.get(API_URL, (req, res, ctx) => {
    return res(ctx.status(200),
    ctx.json([
      {
        "id": 1,
        "transaction_time": "2023-03-07 17:39:50",
        "status": true,
        "customer_id": 15,
        "customer_name": "Holmes Howard",
        "currency": "$5.61"
      },
      {
        "id": 2,
        "transaction_time": "2023-03-08 06:59:37",
        "status": true,
        "customer_id": 16,
        "customer_name": "Cynthia Terrell",
        "currency": "$10.99"
      },
      {
        "id": 3,
        "transaction_time": "2023-03-08 00:41:58",
        "status": true,
        "customer_id": 17,
        "customer_name": "Ann Barron",
        "currency": "$37.87"
      },

    ]))
  })
]