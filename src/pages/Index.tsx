
import { ThemeToggle } from "@/components/ThemeToggle";
import { SimpleThemeToggle } from "@/components/SimpleThemeToggle";
import { useTheme } from "@/hooks/useTheme";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const { theme, resolvedTheme, systemTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header with theme toggles */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Theme Switching Demo</h1>
            <p className="text-sm text-muted-foreground">
              CSS Custom Properties Implementation
            </p>
          </div>
          <div className="flex items-center gap-4">
            <SimpleThemeToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Theme Information Card */}
          <Card className="transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Theme Status
                <Badge variant="secondary">{resolvedTheme}</Badge>
              </CardTitle>
              <CardDescription>
                Current theme configuration and system preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">User Preference:</span>
                  <Badge className="ml-2" variant="outline">{theme}</Badge>
                </div>
                <div>
                  <span className="font-medium">System Theme:</span>
                  <Badge className="ml-2" variant="outline">{systemTheme}</Badge>
                </div>
                <div>
                  <span className="font-medium">Resolved Theme:</span>
                  <Badge className="ml-2" variant="default">{resolvedTheme}</Badge>
                </div>
                <div>
                  <span className="font-medium">Persistence:</span>
                  <Badge className="ml-2" variant="secondary">localStorage</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features Card */}
          <Card className="transition-colors">
            <CardHeader>
              <CardTitle>Implementation Features</CardTitle>
              <CardDescription>
                What's included in this theme switching system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  CSS Custom Properties for theming
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  Smooth 300ms transitions
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  System preference detection
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  User preference persistence
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  Accessibility compliance (WCAG 2.1)
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  Reduced motion support
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Accessibility Card */}
          <Card className="transition-colors">
            <CardHeader>
              <CardTitle>Accessibility Features</CardTitle>
              <CardDescription>
                Built-in accessibility considerations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  Proper ARIA labels for screen readers
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  Keyboard navigation support
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  High contrast ratios maintained
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  Focus indicators visible
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  Respects prefers-reduced-motion
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Demo Elements Card */}
          <Card className="transition-colors">
            <CardHeader>
              <CardTitle>Interactive Elements</CardTitle>
              <CardDescription>
                Test the theme switching with various UI components
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-2">
                <Badge>Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
              <div className="p-4 border border-border rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground">
                  This muted section demonstrates how background colors 
                  transition smoothly between themes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Usage Instructions */}
        <Card className="mt-8 transition-colors">
          <CardHeader>
            <CardTitle>Usage Instructions</CardTitle>
            <CardDescription>
              How to use the theme switching components
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-2">Simple Toggle</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Use <code className="bg-muted px-1 py-0.5 rounded">SimpleThemeToggle</code> for a basic light/dark toggle
                </p>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <code className="text-xs">
                    {`import { SimpleThemeToggle } from '@/components/SimpleThemeToggle'`}
                  </code>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Full Theme Menu</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Use <code className="bg-muted px-1 py-0.5 rounded">ThemeToggle</code> for light/dark/system options
                </p>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <code className="text-xs">
                    {`import { ThemeToggle } from '@/components/ThemeToggle'`}
                  </code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;
