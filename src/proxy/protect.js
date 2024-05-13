export default (user, protectedProps) => {
  const rewriteAttempt = new Proxy(user, {
    get(target, prop) {
      if (protectedProps.includes(prop)) {
        throw new Error(`Access to field '${prop}' is restricted`);
      }
      return target[prop];
    },
    set(target, prop, value) {
      if (protectedProps.includes(prop)) {
        throw new Error(`Modification of field '${prop}' is restricted`);
      }
      return Reflect.set(target, prop, value);
    },
  });
  return rewriteAttempt;
};

// const validateProperty = (prop, protectedProps) => {
//   if (protectedProps.includes(prop)) {
//     throw new Error(`Access to '${prop}' is restricted`);
//   }
// };

// const protect = (obj, protectedProps) => new Proxy(obj, {
//   get(target, prop) {
//     validateProperty(prop, protectedProps);
//     return target[prop];
//   },

//   set(target, prop, value) {
//     validateProperty(prop, protectedProps);
//     target[prop] = value;
//     return true;
//   },
// });

// export default protect;
