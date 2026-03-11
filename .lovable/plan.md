

## Plan: Mobile Optimization, Dark/Light Mode, and Studio Page Improvements

### 1. Add Dark Mode Theme System

The `ThemeProvider` and `ThemeToggle` components already exist but are not wired into the app. The CSS only has `:root` (light) variables — no `.dark` class variables exist.

**Changes:**
- **`src/index.css`**: Add a `.dark` class block with inverted color variables (dark background `#0A0A0A`, light foreground `#F7F6F4`, bronze accent stays `#8B7355`, borders become `#2A2A2A`, secondary becomes `#1A1A1A`, muted-foreground lightens)
- **`src/App.tsx`**: Wrap app in `ThemeProvider` from `use-theme.tsx`
- **`src/hooks/use-theme.tsx`**: Change default theme from `"dark"` to `"light"` to match current light-first design
- **`src/components/Header.tsx`**: Add `ThemeToggle` button next to "Get In Touch" link on desktop and inside the mobile overlay menu

### 2. Mobile Optimization (iPhone/Samsung — 320px–430px)

Issues identified from the current code:

**Header (`Header.tsx`):**
- Logo text "AT4" + subtitle stacks fine, but the hamburger overlay nav links at `48px` may need scaling down to `36px` on very small screens
- Add `safe-area-inset` padding for notched iPhones

**Home (`Home.tsx`):**
- Hero headline at `text-6xl` on small screens — reduce to `text-4xl` for `<640px`
- Stats bar: already `grid-cols-2` on mobile, good. But stat numbers at `52px` may overflow — reduce to `40px` on mobile
- Project list rows: mobile grid is `grid-cols-[40px_1fr]` — good, but project names at `22px` may wrap awkwardly. Reduce to `18px`
- Expertise strip: `flex-wrap` already set, but items lack vertical spacing on mobile — add `gap-y-2`
- Studio statement quote at `text-3xl` on mobile is fine

**Projects (`Projects.tsx`):**
- Filter bar: already `flex-wrap`, but too many filters on one line. Make filters horizontally scrollable with `overflow-x-auto` and `flex-nowrap` on mobile
- Sticky filter bar `top-[73px]` — verify this matches actual header height on mobile
- Grid view: change to `grid-cols-1` on mobile (already done)
- List view on mobile: only shows index + name — good

**ProjectDetail (`ProjectDetail.tsx`):**
- Hero image aspect ratio `21/9` on desktop, `16/9` on mobile — good
- Details sidebar: `border-l` on mobile looks odd when stacked vertically. Remove `border-l` and add `border-t` on mobile via responsive classes
- Thumbnails at `w-20 h-14` are fine for mobile

**Expertise (`Expertise.tsx`):**
- Background number `120px` may overflow on small screens — reduce to `80px` on mobile
- Heading at `96px` needs to scale down to `48px` on mobile

**Studio (`Studio.tsx`):**
- "1993" text at `180px` overflows on mobile — reduce to `100px`
- "From Vision to Legacy" at `52px` — reduce to `36px` on mobile
- Values grid: already `grid-cols-1` on mobile — good

**Contact (`Contact.tsx`):**
- Heading at `96px` overflows — reduce to `48px` on mobile
- Form fields look fine, full-width already

**Footer (`Footer.tsx`):**
- Already `grid-cols-1` on mobile — good

**Global (`index.css` / `App.tsx`):**
- Add `env(safe-area-inset-bottom)` padding to FloatingButtons for iPhone home indicator
- Ensure `scroll-behavior: smooth` on html

**Files to modify:**
- `src/index.css` — dark mode variables, safe area padding, mobile type scaling
- `src/App.tsx` — wrap in ThemeProvider
- `src/hooks/use-theme.tsx` — default to "light"
- `src/components/Header.tsx` — add ThemeToggle, mobile nav sizing
- `src/components/ThemeToggle.tsx` — style to match minimal design (no border, just icon)
- `src/pages/Home.tsx` — mobile responsive type sizes
- `src/pages/Projects.tsx` — scrollable filter bar on mobile
- `src/pages/ProjectDetail.tsx` — responsive detail sidebar
- `src/pages/Expertise.tsx` — mobile type scaling
- `src/pages/Studio.tsx` — mobile type scaling, "1993" sizing
- `src/pages/Contact.tsx` — mobile heading size
- `src/components/FloatingButtons.tsx` — safe area inset

### 3. Studio Page Improvements

Current Studio page is minimal (story, values, team). Enhancements:

- Add a **mission/vision** section below the story — two-column with mission left and vision right, separated by a thin vertical divider
- Add a **disciplines overview strip** (similar to Home page) showing the 6 disciplines as a horizontal row
- Add a **"Start a Project" CTA** section at the bottom before the footer
- Improve the team section with slightly larger placeholder squares and a subtle hover effect (slight border appearance)
- Add a **timeline/milestones** section between story and values: key years (1993, 2000, 2010, 2020) with brief achievements, displayed as a horizontal rule with markers

**File to modify:** `src/pages/Studio.tsx`

