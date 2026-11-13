# PowerShell script to download optimised, royalty-free Unsplash images into public/images/
$ErrorActionPreference = "Continue"

$assets = @(
  @{ Path = "public/images/hero/og-default.jpg"; Url = "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1200&q=82" },

  # About, Approach, Process
  @{ Path = "public/images/about/engineering-studio.jpg"; Url = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=82" },
  @{ Path = "public/images/about/approach-architecture.jpg"; Url = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=82" },
  @{ Path = "public/images/about/process-blueprint.jpg"; Url = "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1400&q=82" },

  # 7 Services
  @{ Path = "public/images/services/ai-development.jpg"; Url = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/services/custom-software.jpg"; Url = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/services/website-development.jpg"; Url = "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/services/mobile-app.jpg"; Url = "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/services/crm-erp.jpg"; Url = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/services/ai-voice.jpg"; Url = "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/services/cloud-api.jpg"; Url = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=82" },

  # 6 AI Solutions
  @{ Path = "public/images/solutions/ai-receptionist.jpg"; Url = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/solutions/ai-sales.jpg"; Url = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/solutions/ai-support.jpg"; Url = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/solutions/workflow-automation.jpg"; Url = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/solutions/ai-chatbots.jpg"; Url = "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/solutions/crm-automation.jpg"; Url = "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=82" },

  # 10 Industries
  @{ Path = "public/images/industries/education.jpg"; Url = "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/industries/healthcare.jpg"; Url = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/industries/real-estate.jpg"; Url = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/industries/manufacturing.jpg"; Url = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/industries/ecommerce.jpg"; Url = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/industries/logistics.jpg"; Url = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/industries/hospitality.jpg"; Url = "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/industries/finance.jpg"; Url = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/industries/retail.jpg"; Url = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/industries/startups.jpg"; Url = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=82" },

  # 5 Portfolio Case Studies
  @{ Path = "public/images/portfolio/case-receptionist.jpg"; Url = "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/portfolio/case-collegeos.jpg"; Url = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/portfolio/case-fleet.jpg"; Url = "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/portfolio/case-crm.jpg"; Url = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/portfolio/case-software.jpg"; Url = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=82" },

  # 6 Insights Articles
  @{ Path = "public/images/insights/ai-business-ops.jpg"; Url = "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/insights/ai-receptionist-guide.jpg"; Url = "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/insights/custom-vs-off-the-shelf.jpg"; Url = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/insights/automation-repetitive-work.jpg"; Url = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/insights/ai-digital-transformation.jpg"; Url = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=82" },
  @{ Path = "public/images/insights/connected-campus-systems.jpg"; Url = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=82" }
)

Write-Host "Downloading $($assets.Count) verified images into public/images/..." -ForegroundColor Cyan

foreach ($item in $assets) {
  if (Test-Path $item.Path) {
    $fileInfo = Get-Item $item.Path
    if ($fileInfo.Length -gt 5000) {
      Write-Host "Skipping existing $($item.Path)" -ForegroundColor DarkGray
      continue
    }
  }

  $dir = Split-Path -Parent $item.Path
  if (!(Test-Path $dir)) {
    New-Item -ItemType Directory -Force -Path $dir | Out-Null
  }

  try {
    Write-Host "Fetching $($item.Path)..."
    Invoke-WebRequest -Uri $item.Url -OutFile $item.Path -UserAgent "Mozilla/5.0" -ErrorAction Stop
  } catch {
    Write-Host "Warning: Failed $($item.Path) ($($_.Exception.Message))." -ForegroundColor Yellow
  }
}

Write-Host "Asset download pass finished!" -ForegroundColor Green


# PowerShell script to generate and verify NAVCHETNAA AI brand logos & icons in public/icons/
$ErrorActionPreference = "Stop"

$iconDir = "public/icons"
if (!(Test-Path $iconDir)) {
  New-Item -ItemType Directory -Force -Path $iconDir | Out-Null
}

# 1. Geometric Prism Emblem (40x40)
$markSvg = @'
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="NAVCHETNAA AI Emblem">
  <rect x="1" y="1" width="38" height="38" rx="6" fill="#101820" stroke="#E7ECEF" stroke-width="1"/>
  <polygon points="20,6 32,14 20,22 8,14" fill="url(#prismTop)" />
  <polygon points="8,14 20,22 20,34 8,26" fill="url(#prismLeft)" />
  <polygon points="32,14 20,22 20,34 32,26" fill="url(#prismRight)" />
  <line x1="20" y1="6" x2="20" y2="34" stroke="#FFFFFF" stroke-opacity="0.45" stroke-width="1"/>
  <line x1="8" y1="14" x2="20" y2="22" stroke="#FFFFFF" stroke-opacity="0.45" stroke-width="1"/>
  <line x1="32" y1="14" x2="20" y2="22" stroke="#FFFFFF" stroke-opacity="0.45" stroke-width="1"/>
  <circle cx="20" cy="22" r="2.2" fill="#8CEE3F"/>
  <defs>
    <linearGradient id="prismTop" x1="8" y1="6" x2="32" y2="22" gradientUnits="userSpaceOnUse">
      <stop stop-color="#8CEE3F"/>
      <stop offset="1" stop-color="#2DD4BF"/>
    </linearGradient>
    <linearGradient id="prismLeft" x1="8" y1="14" x2="20" y2="34" gradientUnits="userSpaceOnUse">
      <stop stop-color="#4ADE80" stop-opacity="0.85"/>
      <stop offset="1" stop-color="#101820"/>
    </linearGradient>
    <linearGradient id="prismRight" x1="32" y1="14" x2="20" y2="34" gradientUnits="userSpaceOnUse">
      <stop stop-color="#38BDF8" stop-opacity="0.85"/>
      <stop offset="1" stop-color="#101820"/>
    </linearGradient>
  </defs>
</svg>
'@

# 2. Full Wordmark Logo (236x40)
$wordmarkSvg = @'
<svg width="236" height="40" viewBox="0 0 236 40" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="NAVCHETNAA AI">
  <rect x="1" y="1" width="38" height="38" rx="6" fill="#101820"/>
  <polygon points="20,7 31,14.5 20,22 9,14.5" fill="#8CEE3F"/>
  <polygon points="9,14.5 20,22 20,33 9,25.5" fill="#4ADE80" fill-opacity="0.7"/>
  <polygon points="31,14.5 20,22 20,33 31,25.5" fill="#38BDF8" fill-opacity="0.7"/>
  <circle cx="20" cy="22" r="2" fill="#FFFFFF"/>
  <text x="50" y="25" fill="#101820" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="16.5" letter-spacing="1.2">NAVCHETNAA</text>
  <rect x="193" y="9" width="34" height="22" rx="4" fill="#101820"/>
  <text x="201" y="24" fill="#8CEE3F" font-family="monospace" font-weight="700" font-size="13" letter-spacing="1">AI</text>
</svg>
'@

# 3. Light-on-Dark Wordmark Logo for Dark Surfaces (236x40)
$wordmarkLightSvg = @'
<svg width="236" height="40" viewBox="0 0 236 40" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="NAVCHETNAA AI">
  <rect x="1" y="1" width="38" height="38" rx="6" fill="#18222F" stroke="#2D3B4E" stroke-width="1"/>
  <polygon points="20,7 31,14.5 20,22 9,14.5" fill="#8CEE3F"/>
  <polygon points="9,14.5 20,22 20,33 9,25.5" fill="#4ADE80" fill-opacity="0.75"/>
  <polygon points="31,14.5 20,22 20,33 31,25.5" fill="#38BDF8" fill-opacity="0.75"/>
  <circle cx="20" cy="22" r="2" fill="#FFFFFF"/>
  <text x="50" y="25" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="16.5" letter-spacing="1.2">NAVCHETNAA</text>
  <rect x="193" y="9" width="34" height="22" rx="4" fill="#8CEE3F"/>
  <text x="201" y="24" fill="#101820" font-family="monospace" font-weight="700" font-size="13" letter-spacing="1">AI</text>
</svg>
'@

Set-Content -Path "$iconDir/navchetnaa-mark.svg" -Value $markSvg -Encoding UTF8
Set-Content -Path "$iconDir/navchetnaa-wordmark.svg" -Value $wordmarkSvg -Encoding UTF8
Set-Content -Path "$iconDir/navchetnaa-wordmark-light.svg" -Value $wordmarkLightSvg -Encoding UTF8

Write-Host "Generated brand logos in public/icons/:" -ForegroundColor Green
Write-Host " - public/icons/navchetnaa-mark.svg"
Write-Host " - public/icons/navchetnaa-wordmark.svg"
Write-Host " - public/icons/navchetnaa-wordmark-light.svg"