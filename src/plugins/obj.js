const objPlugins = {
  install(app, option) {
    console.log('objPlugins app:', app);
    console.log('objPlugins option:', option);
    // app.component() 전역 컴포넌트
    // app.config.globalProperties 전역 애플리케이션 인스턴스에 속성 추가
    // app.directive 커스텀 디렉티브
    // app.provide() 리소즈 
  },
}

export default objPlugins;