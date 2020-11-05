import { useCssVariables } from 'vue-composable'

// token mapping to transform sass variables into css variables
const mapTokens = {
  'background': 'bg',
  'invert': 'inv',
  'scheme': 'sch',
  'text': 'txt',
  'large': 'lg',
  'disabled': 'dsbl',
  'current': 'cur',
  'toggle': 'tgl',
  'border': 'bd',
  'margin': 'm',
  'padding': 'p',
  'color': 'clr',
  'size': 's',
  'button': 'bt',
  'warning': 'warn',
  'danger': 'dang',
  'success': 'sucs',
  'primary': 'prim',
  'dimensions': 'dim',
  'content': 'ct',
  'heading': 'hdg',
  'header': 'hd',
  'footer': 'ft',
  'notification': 'noti',
  'progress': 'prg',
  'dropdown': 'drp',
  'divider': 'dvd',
  'item': 'itm',
  'hover': 'hov',
  'focus': 'foc',
  'active': 'act',
  'message': 'msg',
  'pagination': 'pag',
  'control': 'ctrl',
  'breadcrumb': 'bread',
  'navbar': 'nav',
  'panel': 'pnl',
  'section': 'sct',
}

// finds the correspoding css variable name for a given bulma sass variable name
const sassToCss = sassVariable => {
  return '--blm-' + sassVariable.slice(1).split('-').map(token => mapTokens[token] || token).join('-')
}

// takes a value, if it is a sass variable it will parse it and return it, otherwise returns the value
const parseValue = value => {
  if (value[0] === '$') {
    return `var(${sassToCss(value)})`
  }

  return value
}

// takes a theme written with bulma sass variables and updates the dom with
//  the corresponding css variables
const setTheme = theme => {
  // process theme content
  const themeVariables = Object.keys(theme)

  const cssVariables = themeVariables.map(themeVariable => sassToCss(themeVariable))
  const cssValues = themeVariables.map(themeVariable => parseValue(theme[themeVariable]))

  // construct array of final variables [{ name, value }]
  const variables = cssVariables.map((name, index) => ({ name, value: cssValues[index] }))

  // remove empty variables
  const finalVariables = variables.filter(variable => Boolean(variable.value))

  // updates document with all new variables
  useCssVariables(finalVariables)
}

export { setTheme }
