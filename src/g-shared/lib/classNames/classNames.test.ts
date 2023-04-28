import { classNames } from './classNames'

describe('classNames', () => {
  test('with only first params', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('with additional classes', () => {
    expect(classNames('someClass', {}, ['light'])).toBe('someClass light')
  })

  test('with mods', () => {
    expect(classNames('someClass', { collapsed: true, mobile: false })).toBe(
      'someClass collapsed'
    )
  })

  test('with mods undefined', () => {
    expect(
      classNames('someClass', { collapsed: undefined, mobile: false })
    ).toBe('someClass')
  })

  test('with and additional classes', () => {
    expect(
      classNames('someClass', { collapsed: false, mobile: true }, ['light'])
    ).toBe('someClass mobile light')
  })
})
