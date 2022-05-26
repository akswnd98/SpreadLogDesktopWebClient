const SYMBOLS = {
  App: Symbol.for('App'),
  AppBody: Symbol.for('AppBody'),
  GraphVis: Symbol.for('GraphVis'),
  BlogPost: Symbol.for('BlogPost'),
  PostingId: Symbol.for('PostingId'),
  PostingPost: Symbol.for('PostingPost'),
  PostingIdNotifier: Symbol.for('PostingIdNotifier'),
  PostingPostObserver: Symbol.for('PostingPostObserver'),
  PostingPostNotifier: Symbol.for('PostingPostNotifier'),
  BlogPostObserver: Symbol.for('BlogPostObserver'),
  LoginPopup: Symbol.for('LoginPopup'),
  LoginPopupBody: Symbol.for('LoginPopupBody'),
  CurrentLoginEmail: Symbol.for('CurrentLoginEmail'),
  CurrentLoginEmailSetter: Symbol.for('CurrentLoginEmailSetter'),
  CurrentLoginEmailGetter: Symbol.for('CurrentLoginEmailGetter'),
  LoginPopupBaseState: Symbol.for('LoginPopupBaseState'),
  LoginPopupPasswdState: Symbol.for('LoginPopupPasswdState'),
  LoginPopupCommandStacker: Symbol.for('LoginPopupCommandStacker'),
  PostingPostBodyObserver: Symbol.for('PostingPostBodyObserver'),
  PostingPostDateObserver: Symbol.for('PostingPostDateObserver'),
  PostingPostTitleObserver: Symbol.for('PostingPostTitleObserver'),
};

export {
  SYMBOLS,
};
