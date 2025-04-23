# Expense Tracker App

A mobile application for tracking personal expenses, built with React Native, Expo, and Tamagui UI. This project is designed for upskilling purposes and demonstrates modern mobile development practices.

## Tech Stack

- **React Native & Expo**: Core mobile framework
- **TypeScript**: For type-safe code
- **Tamagui UI**: For consistent and customizable UI components
- **React Navigation**: For app routing and navigation
- **NX Monorepo**: For managing the workspace with multiple packages
- **PNPM**: Package manager

## Project Structure

This project is structured as an NX monorepo containing:

```
expense-tracker/
├── apps/
│   └── mobile/      # The main React Native mobile application
├── packages/
│   └── ui/          # Shared UI components and utilities
├── nx.json
├── package.json
└── README.md
```

## Prerequisites

- Node.js v22.13.0
- PNPM
- Expo CLI
- iOS Simulator or Android Emulator (for local development)

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/expense-tracker.git
   cd expense-tracker
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

### Running the Application

```bash
# Start the mobile app
pnpm nx run mobile:start

# Run on iOS
pnpm nx run mobile:ios

# Run on Android
pnpm nx run mobile:android
```

## Development

### Project Commands

```bash
# Generate a new component in the UI package
pnpm nx g @nx/react:component ComponentName --project=ui

# Lint the mobile app
pnpm nx lint mobile

# Run tests for the mobile app
pnpm nx test mobile

# Build the mobile app
pnpm nx build mobile
```

### Code Structure

- **Components**: UI components are organized in the `packages/ui` directory
- **Screens**: App screens are located in `apps/mobile/src/screens`

## Features

- Track personal expenses
- Categorize expenses
- View spending reports and analytics
- Manage budgets and financial goals

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Expo](https://expo.dev/) - For the React Native development platform
- [Tamagui](https://tamagui.dev/) - For the UI component library
- [React Navigation](https://reactnavigation.org/) - For navigation solutions
- [NX](https://nx.dev/) - For the monorepo tooling
