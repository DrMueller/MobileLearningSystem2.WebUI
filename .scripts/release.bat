cd .\internals
Powershell.exe -executionpolicy remotesigned -File build_release.ps1
Powershell.exe -executionpolicy remotesigned -File commitAndPush_git.ps1

Exit