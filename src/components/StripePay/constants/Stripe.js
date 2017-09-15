// const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
// ? 'pk_live_MY_PUBLISHABLE_KEY'
// : 'pk_test_MY_PUBLISHABLE_KEY';

// export default STRIPE_PUBLISHABLE;

// stripe를 열어서 api 들어가서 publishable key 복사해서 붙여넣기 한다


const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
? 'pk_test_PABNoy6xmF4P31nBxg8O91ES'
: 'pk_test_PABNoy6xmF4P31nBxg8O91ES';

export default STRIPE_PUBLISHABLE;

