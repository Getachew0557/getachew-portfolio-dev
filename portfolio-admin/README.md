# Portfolio Admin Panel

Private admin dashboard to manage portfolio content via CRUD operations.

## Structure
```
portfolio-admin/
├── backend/   → Express API + MongoDB
└── frontend/  → React admin dashboard
```

## Backend Setup
```bash
cd portfolio-admin/backend
npm install
cp .env.example .env   # fill in your values
npm start
```

## Frontend Setup
```bash
cd portfolio-admin/frontend
npm install
cp .env.example .env   # set VITE_API_URL
npm run dev
```

## Deployment
- **Backend** → Render (root dir: `portfolio-admin/backend`)
- **Frontend** → Vercel (root dir: `portfolio-admin/frontend`)

## Environment Variables

### Backend (.env)
| Key | Value |
|-----|-------|
| `MONGODB_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Random secret string |
| `ADMIN_EMAIL` | Your login email |
| `ADMIN_PASSWORD` | Your login password |
| `CLIENT_URL` | Admin frontend URL |

### Frontend (.env)
| Key | Value |
|-----|-------|
| `VITE_API_URL` | Backend API URL |
