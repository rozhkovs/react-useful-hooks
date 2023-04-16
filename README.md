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
  - [useMemoArray](useMemoArray)
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

**Example**
```typescript
// first render
const initialized = useInit(() => {}); // the callback is called;

// after
const initialized = useInit(() => {}); // the callback is not called, the return value is not changed.
```
**Interface**
```typescript
<T>(callback: () => T) => T;
```

### useIsFirstRender
Возвращается результат: первой ли рендер или нет.

**Example**
```typescript
// first render
const isMouting = useIsFirstRender(); // The return is true

// after
const isMouting = useIsFirstRender(); // The return is false.
```
**Interface**
```typescript
() => boolean;
```

### usePrevious
Возвращает аргумент, которые был передан в предыдущем рендеринге.

**Example**
```typescript
// first render
const value = usePrevious('My arg'); // The first result is always undefined

// second render
const value = usePrevious('Not my arg'); // The return is 'My arg'.
```
**Interface**
```typescript
<T>(arg: T) => T | undefined;
```

### useStableCallback
Возвращает новую функцию, которая сохраняет ссылку между рендерами. Если вызвать функцию, то будет вызвана последняя фукнция, которая была передана в аргумент.

**Example**
```typescript
// first render
const wrapped = useStableCallback(() => 'Some value');
wrapped() // 'Some value'

// second render
const wrapped = useStableCallback(() => 'So, I have new result');
wrapped() // 'So, I have new result', but current 'wrapped' === previous 'wrapped';
```
**Interface**
```typescript
<T extends AnyFunc>(callback: T | null | undefined) => T;
```

### useMemoObject
Возвращает мемоизированный объект, сравнивая     его значения.

**Example**
```typescript
const memoizedObj = useMemo(() => ({
  fieldValue1,
  fieldValue2,
  ...otherFields
}), [
  fieldValue1,
  fieldValue2,
  ...otherFields
]);

// is equal
const memoizedObj = useMemoObject({
  fieldValue1,
  fieldValue2,
  ...otherFields
});
```
**Interface**
```typescript
<T extends object>(obj: T) => T;
```

### useMemoArray
Возвращает мемоизированный массив, сравнивая его значения.

**Example**
```typescript
const memoizedArray = useMemo(() => ([
  value1,
  value2,
  ...otherValues
]), [
  value1,
  value2,
  ...otherValues
]);

// is equal
const memoizedArray = useMemoArray([
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

**Example**
```typescript
const [, setValue, valueRef] = useStateRef(0)

useEffect(() => {
  valueRef.current; // 0
  setValue(1)
  valueRef.current; // 1
}, []);
```
**Interface**
```typescript
<S = undefined>() => [S | undefined, Dispatch<SetStateAction<S | undefined>>, Ref<S | undefined>]
<S>(initialState: S | (() => S)) => [S, Dispatch<SetStateAction<S>>, Ref<S>]
```

### useIsChanged
Возвращает результат сравнения аргумента с предыдущим.

**Example**
```typescript
// first render
const value = useIsChanged(0) // The return is false;

// second render
const value = useIsChanged(0) // The return is false;
// or
const value = useIsChanged(1) // The return is true;
```
**Interface**
```typescript
(value: any) => false;
```

### useArgByRef
Возвращает Ref c последним значением, который был передан в аргументы.

**Example**
```typescript
// first render
const ref = useArgByRef(0);
ref.current // 0;

// second render
const ref = useArgByRef([]);
ref.current // [];
```
**Interface**
```typescript
<T>(value: T) => {readonly current: T};
```

### useChangeCounter
Возвражает количество изменений аргумента на протяжении всего жизненного цикла. Это может быть полезно использовать в зависимостях при сложных условиях. 

**Example**
```typescript
// first render
const count = useChangeCounter('init') // The return is 0;

// second render
const value = useChangeCounter('init') // The return is 0;
// or
const value = useChangeCounter('changed') // The return is 1;
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

## 📄 License 

Rozhkov React Useful Hooks is MIT licensed, as found in the [LICENSE] file.


## TODOs

- [ ] add documents
- [ ] add tests for useStateRef
- [ ] automate the execution of tests
