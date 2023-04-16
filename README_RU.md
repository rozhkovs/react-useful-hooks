[LICENSE]: https://github.com/rozhkovs/react-useful-hooks/blob/HEAD/LICENSE


# 🔥 React Useful Hooks 🔥
<p>
  <a href="https://github.com/rozhkovs/react-useful-hooks/blob/HEAD/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="React Native is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.com/package/@rozhkov/react-useful-hooks">
    <img src="https://img.shields.io/npm/v/@rozhkov/react-useful-hooks?color=brightgreen&label=npm%20package" alt="Current npm package version." />
  </a>
</p>

Эта библиотека нацелена предоставить самые необходимые хуки, которые могут потребоваться в типичном React приложении.

This library aims to provide the most necessary hooks, which are required in typical React app;


## Installation
For **npm**
```shell
npm install @rozhkov/react-useful-hooks
```
For **yarn**
```shell
yarn add @rozhkov/react-useful-hooks
```

## Navigation
- [Installation](#Installation)
- [Hooks](#Hooks)
  - [useInit](#useInit)
  - [useIsFirstRender](#useIsFirstRender)
  - [usePrevious](#usePrevious)
  - [useStableCallback](#useStableCallback)
  - [useMemoObject](#useMemoObject)
  - [useMemoArray](#useMemoArray)
  - [useStateRef](#useStateRef)
  - [useIsChanged](#useIsChanged)
  - [useArgByRef](#useArgByRef)
  - [useChangeCounter](#useChangeCounter)
- [Author](#-Author)
- [Was it helpful?](#-Was-it-helpful)
- [License](#-License)

## Hooks
### useInit
Инициализирует значение во время монтирования компонента и каждый раз возвращает его на протяжении всего жизненного цикла компонента.

Initializes a value during component mounting and returns it each time throughout the component lifecycle.

**Example**
```typescript
// first render
const initialized = useInit(() => {}); // the callback is called.

// after
const initialized = useInit(() => {}); // the callback is not called, the return value is not changed.
```
**Interface**
```typescript
<T>(callback: () => T) => T;
```

### useIsFirstRender
Возвращается результат: первой ли рендер или нет.

At first render, the result is true, then false.

**Example**
```typescript
// first render
const isMouting = useIsFirstRender(); // The return is true.

// after
const isMouting = useIsFirstRender(); // The return is false.
```
**Interface**
```typescript
() => boolean;
```

### usePrevious
Возвращает аргумент, которые был передан в предыдущем рендеринге.

Returns a previous argument that was passed during a previous render.

**Example**
```typescript
// first render
const value = usePrevious('My arg'); // The first result is always undefined.

// second render
const value = usePrevious('Not my arg'); // The return is 'My arg'.
```
**Interface**
```typescript
<T>(arg: T) => T | undefined;
```

### useStableCallback
Возвращает новую функцию, которая сохраняет ссылку между рендерами. Если вызвать функцию, то будет вызвана последняя фукнция, которая была передана в аргумент.

Returns a new callback that preserves the reference between renderers. If you call a function, the last function that was passed to the argument will be called.

**Example**
```typescript
// first render
const wrapped = useStableCallback(() => 'Some function');
wrapped(); // 'Some function'

// second render
const wrapped = useStableCallback(() => 'So, I have new function');
wrapped(); // 'So, I have new function', but current 'wrapped' === previous 'wrapped'.
```
**Interface**
```typescript
<T extends AnyFunc>(callback: T | null | undefined) => T;
```

### useMemoObject
Возвращает мемоизированный объект, сравнивая его значения.

Return a memoized object, comparing values of its keys.

**Example**
```typescript
const memoizedObj = useMemoObject({
  fieldValue1,
  fieldValue2,
  ...otherFields
});

// is equal
const memoizedObj = useMemo(() => ({
  fieldValue1,
  fieldValue2,
  ...otherFields
}), [
  fieldValue1,
  fieldValue2,
  ...otherFields
]);
```
**Interface**
```typescript
<T extends object>(obj: T) => T;
```

### useMemoArray
Возвращает мемоизированный массив, сравнивая его значения.

Return a memoized array, comparing its values.

**Example**
```typescript
const memoizedArray = useMemoArray([
  value1,
  value2,
  ...otherValues
]);

// is equal
const memoizedArray = useMemo(() => ([
  value1,
  value2,
  ...otherValues
]), [
  value1,
  value2,
  ...otherValues
]);
```
**Interface**
```typescript
<T extends any[]>(array: T) => T;
```

### useStateRef
Как useState, только возвращает третим параметром ref c самым последним значением.

Similar to useState, but it also returns a third item "ref" with the most recent value.

**Example**
```typescript
const [, setValue, valueRef] = useStateRef(0);

useEffect(() => {
  valueRef.current; // 0
  setValue(1);
  valueRef.current; // 1
}, []);
```
**Interface**
```typescript
<S = undefined>() => [S | undefined, Dispatch<SetStateAction<S | undefined>>, Ref<S | undefined>];
<S>(initialState: S | (() => S)) => [S, Dispatch<SetStateAction<S>>, Ref<S>];
```

### useIsChanged
Возвращает результат сравнения аргумента с предыдущим.

Returns the result of comparing between a current argument and a previous argument.

**Example**
```typescript
// first render
const value = useIsChanged(0); // The return is false

// second render
const value = useIsChanged(0); // The return is false
// or
const value = useIsChanged(1); // The return is true
```
**Interface**
```typescript
(value: any) => false;
```

### useArgByRef
Возвращает Ref c последним значением, который был передан в аргументы.

Returns 'ref' with the most recent value which was passed to the hook.


**Example**
```typescript
// first render
const ref = useArgByRef(0);
ref.current; // 0

// second render
const ref = useArgByRef([]);
ref.current; // []
```
**Interface**
```typescript
<T>(value: T) => {readonly current: T};
```

### useChangeCounter
Возвражает количество изменений аргумента на протяжении всего жизненного цикла. Это может быть полезно использовать в зависимостях при сложных условиях.

Returns the count of how many times the argument has changed throughout the component lifecycle. This can be helpful when you have complex conditions in useEffect, etc.

**Example**
```typescript
// first render
const count = useChangeCounter('init'); // The return is 0

// second render
const count = useChangeCounter('init'); // The return is 0
// or
const count = useChangeCounter('changed'); // The return is 1
```
**Interface**
```typescript
<T>(value: T, compare?: (v1: T, v2: T) => boolean) => number;
```

## 👨‍💻 Author
[Sergey Rozhkov](https://github.com/rozhkovs)

## 🎯 Was it helpful?

Тебе понравилось и оказалось полезно? Ты можешь помочь проекту следующим образом:
- ⭐ Поставить звездочку.
- 💡 Предложить свои идеи.
- 😉 Открыть найденную проблему.

Do you like it and find it helpful? You can help this project in the following way:
- ⭐ Put the star.
- 💡 Suggest your ideas.
- 😉 Open a founded issue.


## 📄 License

Rozhkov React Useful Hooks is MIT licensed, as found in the [LICENSE] file.


## TODOs

- [ ] add documents
- [ ] add tests for useStateRef
- [ ] automate the execution of tests
