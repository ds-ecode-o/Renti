# Renti Design Guidelines

## Design Approach

**System-Based Approach**: This is a utility-focused financial management application requiring efficiency, clarity, and trust. The design will follow Material Design principles adapted for mobile-first PWA, with inspiration from fintech apps like Khatabook, maintaining a professional, data-dense interface optimized for frequent daily use.

## Core Design Principles

1. **Mobile-First Financial Clarity**: Every interface element prioritizes quick comprehension of financial data
2. **Trust Through Professionalism**: Clean, structured layouts that convey reliability for financial management
3. **Efficiency Over Decoration**: Minimize visual noise; maximize information density and task completion speed
4. **Touch-Optimized Interactions**: All interactive elements meet minimum 44px tap targets for thumb-friendly navigation

## Typography System

**Headings**: Inter (700 weight)
- H1: text-3xl (30px) - Screen titles
- H2: text-2xl (24px) - Section headers  
- H3: text-xl (20px) - Card titles
- H4: text-lg (18px) - Subsection headers

**Body Text**: System font stack (-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto)
- Large: text-base (16px) - Primary content, form labels
- Regular: text-sm (14px) - Secondary content, descriptions
- Small: text-xs (12px) - Metadata, timestamps, helper text

**Financial Figures**: JetBrains Mono (500 weight)
- Payment amounts: text-2xl to text-4xl depending on prominence
- Currency displays: text-lg to text-xl
- All monetary values use tabular-nums for alignment

## Layout & Spacing System

**Tailwind Spacing Units**: Use 4, 8, 12, 16, 20, 24 as primary spacing values
- Component padding: p-4, p-6
- Section spacing: space-y-4, space-y-6
- Card margins: mb-4, mb-6
- Page padding: px-4, py-6 (mobile), px-6, py-8 (tablet+)

**Grid System**:
- Container: max-w-7xl mx-auto px-4
- Cards/Lists: Single column on mobile, grid-cols-2 on tablet (md:), grid-cols-3 on desktop (lg:) for summary cards only
- Bottom navigation: Fixed at viewport bottom, height h-16

## Color System (From PRD)

**Primary**: #2563EB (Blue-600)
- Primary CTAs, active navigation items, links
- Hover: #1D4ED8 (Blue-700)

**Secondary**: #64748B (Slate-500)  
- Secondary text, inactive states, borders
- Lighter variant: #94A3B8 (Slate-400)

**Success**: #10B981 (Green-500)
- Payment confirmed status, positive indicators
- Background tint: #D1FAE5

**Warning**: #F59E0B (Amber-500)
- Payment due soon, caution states
- Background tint: #FEF3C7

**Error**: #EF4444 (Red-500)
- Overdue payments, critical alerts  
- Background tint: #FEE2E2

**Neutral Backgrounds**:
- Page background: #F8FAFC (Slate-50)
- Card background: #FFFFFF
- Dividers: #E2E8F0 (Slate-200)

## Component Library

### Navigation Components

**Bottom Tab Bar**:
- Fixed bottom position with backdrop blur (bg-white/95 backdrop-blur)
- 5 evenly distributed tabs with icons above labels
- Active state: Primary color icon + label
- Inactive state: Secondary color with reduced opacity
- Height: 64px with safe-area-inset-bottom padding

**Header Bar**:
- Height: 56px with status bar padding
- Logo left-aligned, profile avatar/actions right-aligned
- Sticky positioning on scroll with subtle shadow
- Background: white with border-b in slate-200

### Data Display Components

**Summary Cards**:
- White background with rounded-xl borders
- Padding: p-6
- Drop shadow: shadow-sm
- Icon in colored circle (bg-blue-100, text-blue-600)
- Large number in JetBrains Mono
- Label in small secondary text below
- Arrange in grid-cols-2 on mobile, grid-cols-3 on tablet+

**Tenant List Items**:
- White background with border-b divider
- Height: min-h-20
- Left: 48px circular avatar
- Center: Tenant name (text-base, font-semibold), property address (text-sm, text-slate-600)
- Right: Rent amount (JetBrains Mono, text-lg), payment status badge
- Tap area expands full width

**Payment Status Badges**:
- Paid: bg-green-100, text-green-700, "●" indicator
- Pending: bg-amber-100, text-amber-700
- Overdue: bg-red-100, text-red-700
- Rounded-full, px-3, py-1, text-xs, font-medium

**Transaction History Items**:
- Alternating subtle backgrounds for readability
- Date left (text-sm, text-slate-500)
- Description center (text-base)
- Amount right (JetBrains Mono, colored by type)
- Dividers between items

### Form Components

**Input Fields**:
- Height: h-12
- Border: border-slate-300, rounded-lg
- Focus: ring-2, ring-blue-500, border-blue-500
- Padding: px-4
- Label above input: text-sm, font-medium, mb-2
- Error state: border-red-500, text-red-600 helper text

**Buttons**:
- Primary: bg-blue-600, text-white, hover:bg-blue-700, h-12, rounded-lg, font-medium
- Secondary: bg-slate-200, text-slate-700, hover:bg-slate-300
- Ghost: text-blue-600, hover:bg-blue-50
- Destructive: bg-red-600, text-white, hover:bg-red-700
- Minimum width: min-w-24, padding px-6

**Floating Action Button (FAB)**:
- Size: w-14, h-14
- Position: fixed, bottom-20 (above bottom nav), right-4
- Background: bg-blue-600 with shadow-lg
- Icon: white, size-6
- Rounded-full

**Date Pickers**:
- Native mobile date inputs styled with custom appearance
- Calendar icon suffix
- Same styling as standard inputs

### Modal/Overlay Components

**Bottom Sheets** (for mobile actions):
- Slide up from bottom
- Rounded top corners (rounded-t-2xl)
- Drag handle at top
- White background with shadow-2xl
- Max height: 90vh with scroll

**Alert Banners**:
- Full-width, px-4, py-3
- Icon left, message center, dismiss right
- Overdue: bg-red-50, border-l-4, border-red-500
- Success: bg-green-50, border-l-4, border-green-500

### Empty States

**Illustrations**: Simple line illustrations in slate-400
- "No tenants yet" - Add tenant icon with message
- "No payments recorded" - Empty ledger illustration
- Center aligned with 40% opacity icon
- Call-to-action button below message

## Screen-Specific Layouts

### Dashboard
- Sticky header with greeting and current date
- Alert banner for overdue payments (conditional)
- 2-column summary cards grid (mobile), 3-column (tablet+)
- "Recent Payments" section with last 5 transactions
- FAB for quick payment entry
- Pull-to-refresh enabled

### Tenant Management
- Search bar sticky below header
- Filter chips (All, Paid Up, Overdue)
- Scrollable list of tenant cards
- Swipe actions reveal: Call (green), Message (blue), View (slate)
- Alphabetical section headers
- FAB for add tenant

### Payment Entry
- Form in single column
- Tenant autocomplete with avatars
- Large amount input with currency prefix
- Payment method selector with icons (Cash, Bank, Check)
- Date pickers default to today
- Photo upload for receipt (camera or gallery)
- Sticky bottom action bar with Save/Cancel

### Reports
- Date range selector at top (This Month, Last Month, Custom)
- Revenue summary cards
- Line chart for trends (simple, no gradients)
- Bar chart for payment distribution
- Export button (top right) - PDF/CSV options
- Scrollable content area

## Animations & Micro-interactions

**Minimal Motion Approach**:
- Page transitions: Simple slide (100ms ease-out)
- Tab switching: Fade between views (150ms)
- List item taps: Subtle scale down (0.98) on touch
- Success actions: Brief checkmark animation (300ms)
- Loading: Simple spinner, no skeleton screens
- NO scroll animations, parallax, or decorative motion

## Accessibility Requirements

- Color contrast minimum 4.5:1 for all text
- Focus indicators visible on all interactive elements
- Touch targets minimum 44x44px
- Form inputs have associated labels
- Error messages linked to inputs via aria-describedby
- Skip navigation link for keyboard users
- Status messages announced to screen readers

## Images

**Profile/Tenant Avatars**:
- Circular, 48px diameter in lists, 96px in detail views
- Fallback: Colored circle with initials (first + last name)
- Camera upload option with crop functionality

**Receipt Photos**:
- Displayed in payment details as thumbnails (80x80px)
- Tap to view full screen
- Compression for storage efficiency

**No Hero Images**: This is a utility app - dashboard opens directly to financial data, not marketing content

## Responsive Behavior

- Mobile (default): Single column, bottom navigation
- Tablet (768px+): Two-column grids for cards, bottom navigation remains
- Desktop (1024px+): Maximum width container (1280px), sidebar navigation option considered but bottom nav retained for consistency

This design system prioritizes rapid task completion, financial data clarity, and mobile-optimized interactions for daily rent management workflows.