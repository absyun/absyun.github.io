var store = [{
        "title": "Windows 10 WSL",
        "excerpt":"WSL (Windows Subsystem for Linux) Microsoft에서 Windows PC로 더 훌륭한 개발경험을 제공해주기 위해 내놓은 시스템이다. 익숙해지면 Mac이 아쉬워지지 않을까… 개인적으로 단일 디바이스를 선호하는 데, Windows는 여러 이유로 포기하기가 어려웠던 터라 이 기능이 기대되지 않을 수 없었다. Microsoft에서 공개한 아키텍쳐 https://blogs.msdn.microsoft.com/wsl/2016/04/22/windows-subsystem-for-linux-overview/ 설치 방법 우선 제어판에서 Linux용 하위 시스템 Option을 켜줘야하며, 제어판...","categories": ["Environment"],
        "tags": [],
        "url": "https://absyun.github.io/environment/2020/03/15/01.html",
        "teaser": null
      },{
        "title": "Github sshkey로 계정 연결하기",
        "excerpt":"Github sshkey로 계정 연결하기 SSH-key를 이용해서 git-repo 사용하기… Github을 사용하다보면 보면 username, password를 계속 입력하기 싫어서 config에 Setting하게 되는 데, 이보다 더 안정적으로 매번 password를 입력하는 불편함 없이 사용하기 위해 ssh-key를 이용해서 설정하는 방법을 기록해둔다. ssh-key 생성 $&gt; ssh-keygen 명령을 수행하면 Key이름을 설정할 수 있고 (하지 않을 경우 id_rsa로 생성)...","categories": ["Environment"],
        "tags": [],
        "url": "https://absyun.github.io/environment/2020/03/15/02.html",
        "teaser": null
      },{
        "title": "Visual studio code + WSL",
        "excerpt":"Windows 10 바탕에 WSL 기반으로 개발 환경을 셋팅하고, 본격적 사용을 하다보면 불편한 점이 바로 나타난다. Linux 환경에서의 GUI 환경 부재다. 물론 vi 로 “모든 걸 다 할 수 있어!” 라고 주장하시는 분들이라면 뭐… 딱히 공감을 못할지도 모르겠지만, 자고로… 개발자들은 기술, 문명의 발전… 을 흡수할 수도 있어야하는 것이 아닌가 라는 측면에서...","categories": ["Environment"],
        "tags": [],
        "url": "https://absyun.github.io/environment/2020/03/15/03.html",
        "teaser": null
      },{
        "title": "WSL2 ... and Docker",
        "excerpt":"WSL + VSCODE의 조합으로 많은 것들을 편리한 환경에서 수행해 올 수 있었다. 하지만 WSL에서 아쉬움으로 와 닿았던 것… 바로 Docker 실행이다. 초반에는 Docker를 포기하고 준비된 환경안에서 할 수 있는 것들에 만족해 왔지만… 어느 순간 Docker가 절실히 필요해진 상황이왔고… 이를 해결하기 위해 WSL2로 Windows10을 테스트 버전 업그레이드를 강행하게 되었다. 참고로 불안정하다고...","categories": ["Environment"],
        "tags": [],
        "url": "https://absyun.github.io/environment/2020/03/15/04.html",
        "teaser": null
      },{
        "title": "OIDC Login 구현해보기 Part-1",
        "excerpt":"OIDC… Open ID Connect 일명 OIDC … 요즘 많은 사이트에서 볼 수 있는, 카카오, 네이버 로그인, 페이스북, 구글 계정 등으로 로그인과 같이 서비스를 제공해주는 측에서는 민감한 사용자의 개인정보 (아이디, 패스워드등)을 회원가입을 통해 수집/보관하지 않고 사용자를 인증하는 과정을 Provider측에 위임하는 형태의 서비스를 많이 볼 수 있다. 이는 사용자 입장에서도 불필요하게 작은...","categories": ["Development"],
        "tags": [],
        "url": "https://absyun.github.io/development/2020/03/18/01.html",
        "teaser": null
      },{
        "title": "OIDC Login 구현해보기 Part-2",
        "excerpt":"사용할 IDP를 설정했으므로, 이제 본격적으로 User에게 Input을 받을 Frontend 그리고 최종적으로 인증을 완료하고 Token을 받게될 Backend를 구현해보기로 하자. Frontend쪽은 React 기반의 Javascript, Backend쪽은 Gin 기반의 GO 언어를 이용해보려고 한다. 실제 Flow을 이해하고 나면 어떤 Framework, Language를 사용할지에 대한 건 큰 문제는 아니다. 구현하는 과정에서도 단순히 Curl 명령으로도 이를 수행할 수...","categories": ["Development"],
        "tags": [],
        "url": "https://absyun.github.io/development/2020/03/18/02.html",
        "teaser": null
      },{
        "title": "OIDC Login 구현해보기 Part-3",
        "excerpt":"앞서 Part에서 Frontend 측에서 Browser를 통해 IDP를 거쳐 code를 받는 것 까지 진행되었다. Confidential Type의 인증은 최종적으로 Secret을 이용하여 access token을 받게 되는 데 이 Secret은 Backend 에서 보관하고 있는 것이 안전하다. Static에 해당하는 부분은 Browser에 보여질 때 실제로 Client측에 그대로 Download 되어지기 때문에 Client측에서 Secret을 사용하려고 하면 그대로 노출이...","categories": ["Development"],
        "tags": [],
        "url": "https://absyun.github.io/development/2020/03/18/03.html",
        "teaser": null
      }]
