# build-and-install.ps1

# 1. Set JAVA_HOME to JDK 21
$Env:JAVA_HOME = "C:\Program Files\Java\jdk-21"
$Env:Path = "$Env:JAVA_HOME\bin;" + $Env:Path

# 2. Go to project root
$projectRoot = "C:\Users\AMAN\Desktop\AMAN123\myweb7"
Set-Location $projectRoot

# 3. Build Vite React app
Write-Host "Building Vite React app..."
npm run build

# 4. Copy and sync Capacitor
Write-Host "Copying and syncing Capacitor..."
npx cap copy
npx cap sync

# 5. Go to Android folder
$androidDir = "$projectRoot\android"
Set-Location $androidDir

# 6. Clean Gradle
Write-Host "Cleaning Gradle..."
.\gradlew clean

# 7. Build Android APK
Write-Host "Assembling Debug APK..."
.\gradlew assembleDebug

# 8. Install APK on connected device/emulator
Write-Host "Installing APK on device..."
.\gradlew installDebug

Write-Host "✅ Build and install complete! Open Android Studio if you want to run manually."
