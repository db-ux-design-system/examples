## Angular

- For Angular always write HTML, CSS and TS into one file
- Always use ``standalone`` components for Angular
- Always use ``@if``, `@for` instead of `*ngIf`, `*ngFor`
- Always use DB UX for CSS variables
- Don't inline ``style`` use the `styles` property from `@Component`
- Don't use ``px`` values for styling use `variables` instead

--- START: DB UX Copilot Instructions – do not edit below ---

# @db-ux/core-components
## Common AI mistakes

### `DBButton` or `db-button`

- available variants are `outline`, `brand`, `filled`, `ghost`
- always use variant `outline` as default
- use variant `brand` as CTA or primary action
- if `noText`/`no-text` property is used add a `DBTooltip` or `db-tooltip` inside the Button
- always add a `type` as property as best practise


# @db-ux/core-foundations
## CSS

- If you use CSS, follow these rules:
    - for `variables` like, sizing, spacing, elevation, border or container-size use the file node_modules/@db-ux/core-foundations/agent/css/Variables.md

## SCSS

- If you use SCSS, follow these rules:
    - for `variables` like, sizing, spacing, elevation, border or container-size use the file node_modules/@db-ux/core-foundations/agent/scss/Variables.md

## Tailwind

- If you use Tailwind, follow these rules:
    - for `variables` like, sizing, spacing, elevation, border or container-size use the file node_modules/@db-ux/core-foundations/agent/tailwind/Variables.md
    - Always stick to the variables. Don't use values like `p-4` or `m-[16px]`; use `p-fix-xs` or `m-fix-md` instead.


# @db-ux/ngx-core-components
- Use "@db-ux/ngx-core-components" as import for components:
  - use for `DBDrawer` or `Drawer` the file node_modules/@db-ux/ngx-core-components/agent/Drawer.md
  - use for `DBTooltip` or `Tooltip` the file node_modules/@db-ux/ngx-core-components/agent/Tooltip.md
  - use for `DBTextarea` or `Textarea` the file node_modules/@db-ux/ngx-core-components/agent/Textarea.md
  - use for `DBTag` or `Tag` the file node_modules/@db-ux/ngx-core-components/agent/Tag.md
  - use for `DBTabs` or `Tabs` the file node_modules/@db-ux/ngx-core-components/agent/Tabs.md
  - use for `DBTabItem` or `TabItem` the file node_modules/@db-ux/ngx-core-components/agent/TabItem.md
  - use for `DBSwitch` or `Switch` the file node_modules/@db-ux/ngx-core-components/agent/Switch.md
  - use for `DBStack` or `Stack` the file node_modules/@db-ux/ngx-core-components/agent/Stack.md
  - use for `DBSelect` or `Select` the file node_modules/@db-ux/ngx-core-components/agent/Select.md
  - use for `DBSection` or `Section` the file node_modules/@db-ux/ngx-core-components/agent/Section.md
  - use for `DBRadio` or `Radio` the file node_modules/@db-ux/ngx-core-components/agent/Radio.md
  - use for `DBPopover` or `Popover` the file node_modules/@db-ux/ngx-core-components/agent/Popover.md
  - use for `DBPage` or `Page` the file node_modules/@db-ux/ngx-core-components/agent/Page.md
  - use for `DBNotification` or `Notification` the file node_modules/@db-ux/ngx-core-components/agent/Notification.md
  - use for `DBNavigationItem` or `NavigationItem` the file node_modules/@db-ux/ngx-core-components/agent/NavigationItem.md
  - use for `DBNavigation` or `Navigation` the file node_modules/@db-ux/ngx-core-components/agent/Navigation.md
  - use for `DBLink` or `Link` the file node_modules/@db-ux/ngx-core-components/agent/Link.md
  - use for `DBInput` or `Input` the file node_modules/@db-ux/ngx-core-components/agent/Input.md
  - use for `DBInfotext` or `Infotext` the file node_modules/@db-ux/ngx-core-components/agent/Infotext.md
  - use for `DBIcon` or `Icon` the file node_modules/@db-ux/ngx-core-components/agent/Icon.md
  - use for `DBHeader` or `Header` the file node_modules/@db-ux/ngx-core-components/agent/Header.md
  - use for `DBDivider` or `Divider` the file node_modules/@db-ux/ngx-core-components/agent/Divider.md
  - use for `DBCustomSelect` or `CustomSelect` the file node_modules/@db-ux/ngx-core-components/agent/CustomSelect.md
  - use for `DBCheckbox` or `Checkbox` the file node_modules/@db-ux/ngx-core-components/agent/Checkbox.md
  - use for `DBCard` or `Card` the file node_modules/@db-ux/ngx-core-components/agent/Card.md
  - use for `DBButton` or `Button` the file node_modules/@db-ux/ngx-core-components/agent/Button.md
  - use for `DBBrand` or `Brand` the file node_modules/@db-ux/ngx-core-components/agent/Brand.md
  - use for `DBBadge` or `Badge` the file node_modules/@db-ux/ngx-core-components/agent/Badge.md
  - use for `DBAccordionItem` or `AccordionItem` the file node_modules/@db-ux/ngx-core-components/agent/AccordionItem.md
  - use for `DBAccordion` or `Accordion` the file node_modules/@db-ux/ngx-core-components/agent/Accordion.md

--- END: DB UX Copilot Instructions – do not edit above ---
