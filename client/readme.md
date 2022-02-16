# Engineering Blog
---
client framework들을 사용하면 lifecycle이나 observable field와 같은 것들을 사용할 때 클래스(컴포넌트)의 책임이 너무 많아짐.
글로벌한거 말고 해당 패널 내에서만 화면 동기가 필요한 경우 같은 상황에서 간단하게 사용하기 편한 정도.

보통 클린코드 wrapper정도로 사용하면 좋을거 같음.
(근데 그러라고 만들어 놓은거 같진 않음.)

의존성 주입을 하면 의존성 생각하지 않고 생성 작업을 할 수 있어서 뇌빼고 코딩하기 편함.

service-locator anti-pattern의 경우 생성 타임에서 service-locator를 사용하는 것은 ioc framework의 장점을 앗아갈 수 있는 anti-pattern이라고 동의함.
하지만 행동 타임에서 singleton-scope service-locator를 사용하는 것 까지 제약하는 것은 사실상 말이 안됨. 자신에게 의존성을 주입한 대상에 대한 의존성을 행동 타임에 갖는 것은 사실상 필수이기 때문.

만약 singleton-scope로 생성된 것이 아닌데 circular-dependency가 발생했다면 설계를 통째로 바꾸거나 그 부분(circular-dependency 발생한)의 의존성 주입을 버려야할 것 같다.
