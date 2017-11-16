# generate-uid

This library can be used to generate a unique key of type UID or key for activation of desktop programs

The API is as folows:

```
generateUID(numberGroups);
```

In this library, you can control the number of symbol groups


## Examples

Generate UID consisting of 3 groupes:

```
generateUID(3); // 'A9941-593AF-6B6EC'
```


Generate UID consisting of 6 groupes:

```
generateUID(6); // '2054C-C1C1B-879C7-F9BB8-3C166-CCF1C'
```