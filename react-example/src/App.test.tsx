import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

/**
 * This test verifies that @db-ux/react-core-components can be imported and
 * rendered without issues in Vitest 4's strict ESM environment.
 *
 * Previously (v4.8.0), the package's dist/index.js used relative imports
 * without explicit .js extensions (e.g., `from './components/accordion'`),
 * which caused ERR_UNSUPPORTED_DIR_IMPORT errors in Vitest 4.
 *
 * Since v4.10.0, all relative imports include proper .js extensions,
 * so no `ssr.noExternal` workaround is needed.
 */
describe('App', () => {
	it('renders DBButton components from @db-ux/react-core-components', () => {
		render(<App />);
		const buttons = screen.getAllByRole('button');
		expect(buttons.length).toBe(3);
	});

	it('imports from @db-ux/react-core-components resolve correctly (ESM)', async () => {
		// Direct dynamic import to validate ESM resolution works
		const mod = await import('@db-ux/react-core-components');
		expect(mod.DBButton).toBeDefined();
	});
});
