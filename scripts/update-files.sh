#!/bin/bash

# 릴리즈 노트가 생성될 폴더 목록을 정의합니다.
FOLDERS=("foo" "bar")

# 각 폴더에 대해 작업을 반복합니다.
for folder in "${FOLDERS[@]}"
do
  # 폴더 내의 파일이 변경되었는지 확인합니다.
  echo $folder
  if git diff --quiet HEAD^ HEAD -- "$folder"; then
    echo "No changes in $folder folder. Skipping update."
  else
    # commit-analyzer에 의해 분석된 릴리즈 정보를 가져옵니다.
    RELEASE_TYPE=$(jq -r '.nextRelease.type' $PWD/.release-asar.json)
    echo $RELEASE_TYPE

    # 릴리스 타입에 따라 버전을 업데이트합니다.
    if [[ $RELEASE_TYPE == "patch" ]]; then
      npm version patch --prefix $folder
    elif [[ $RELEASE_TYPE == "minor" ]]; then
      npm version minor --prefix $folder
    elif [[ $RELEASE_TYPE == "major" ]]; then
      npm version major --prefix $folder
    else
      echo "Unknown release type. Skipping version update."
    fi

    # 폴더의 현재 버전을 가져옵니다.
    VERSION=$(jq -r '.version' "$folder/package.json")

    # 디렉토리-버전 형태의 태그를 생성합니다.
    TAG="$folder-v$VERSION"

    # 태그를 푸시합니다.
    git tag "$TAG"
    git push origin "$TAG"

    # CHANGELOG.md 파일을 생성합니다.
    cd $folder
    npx conventional-changelog-cli -p angular -i CHANGELOG.md -s -r 0
    cd ..


    # 변경된 파일을 Git에 추가합니다.
    git add "$folder/package.json" "$folder/CHANGELOG.md"
    git commit -m "chore(release): Update $folder package.json and CHANGELOG.md"
  fi
done