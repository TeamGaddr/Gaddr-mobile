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

# Install diesel CLI
cargo install diesel_cli --no-default-features --features postgres

# Run development server
dotenv cargo run

# Build for production
cargo build --release

# Run tests
cargo test

# Check code
cargo check

# Database migrations
diesel migration run

# Clean build files
cargo clean

# Update dependencies
cargo update
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
- `diesel migration run` - Run database migrations
- `cargo clean` - Clean build files
- `cargo update` - Update dependencies 