# Automated HTTP verification script for all NAVCHETNAA AI routes
$baseUrl = "http://localhost:3000"

$routes = @(
  "/",
  "/about",
  "/approach",
  "/process",
  "/services",
  "/services/ai-development-automation",
  "/services/custom-software-development",
  "/services/website-development",
  "/services/mobile-app-development",
  "/services/crm-erp-development",
  "/services/ai-voice-receptionist",
  "/services/api-integration-cloud-engineering",
  "/ai-solutions",
  "/ai-solutions/ai-receptionist",
  "/ai-solutions/ai-sales-agents",
  "/ai-solutions/ai-customer-support",
  "/ai-solutions/workflow-automation",
  "/ai-solutions/ai-chatbots",
  "/ai-solutions/crm-automation",
  "/products",
  "/products/navchetnaa-ai-receptionist",
  "/products/collegeos",
  "/products/bizconnect",
  "/industries",
  "/industries/education",
  "/industries/healthcare",
  "/industries/real-estate",
  "/industries/manufacturing",
  "/industries/e-commerce",
  "/industries/logistics",
  "/industries/hospitality",
  "/industries/finance",
  "/industries/retail",
  "/industries/startups",
  "/portfolio",
  "/portfolio/ai-receptionist-crm",
  "/portfolio/collegeos-institutional-management",
  "/portfolio/fleet-transport-management",
  "/portfolio/business-crm",
  "/portfolio/custom-business-software",
  "/insights",
  "/insights/how-ai-is-changing-modern-business-operations",
  "/insights/what-is-an-ai-receptionist",
  "/insights/custom-software-vs-ready-made-software",
  "/insights/how-business-automation-reduces-repetitive-work",
  "/insights/role-of-ai-in-digital-transformation",
  "/insights/why-educational-institutions-need-connected-management-systems",
  "/contact",
  "/thank-you",
  "/privacy-policy",
  "/terms-and-conditions",
  "/cookie-policy",
  "/sitemap.xml",
  "/robots.txt"
)

Write-Host "Verifying $($routes.Count) routes against $baseUrl..." -ForegroundColor Cyan
$failed = 0

foreach ($route in $routes) {
  try {
    $res = Invoke-WebRequest -Uri "$baseUrl$route" -UseBasicParsing -ErrorAction Stop
    if ($res.StatusCode -eq 200) {
      Write-Host "[200 OK] $route" -ForegroundColor Green
    } else {
      Write-Host "[$($res.StatusCode)] $route" -ForegroundColor Yellow
      $failed++
    }
  } catch {
    Write-Host "[ERROR] $route -> $($_.Exception.Message)" -ForegroundColor Red
    $failed++
  }
}

if ($failed -eq 0) {
  Write-Host "`nAll $($routes.Count) routes passed with HTTP 200 OK!" -ForegroundColor Green
} else {
  Write-Host "`n$failed route(s) failed verification." -ForegroundColor Red
}