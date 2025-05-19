# Gaddr Mobile

## Frontend (Next.js)

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Backend (Rust)

```bash
# Install Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Run development server
cargo run

# Build for production
cargo build --release

# Run tests
cargo test

# Check code
cargo check
```

## Available Scripts

### Frontend
- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

### Backend
- `cargo run` - Run development server
- `cargo build --release` - Build optimized production binary
- `cargo test` - Run tests
- `cargo check` - Check code without building 