function heading({
  base,
  measurer,
  font: { light, regular, medium, bold },
}) {
  const { type, multiplier } = measurer;
  const basis = base * multiplier;
  return {
    h1: {
      'font-family': light,
      'font-size': `${basis * 3}${type}`,
      'line-height': `${basis * 3.1}${type}`,
    },
    h2: {
      'font-family': regular,
      'font-size': `${basis * 2.5}${type}`,
      'line-height': `${basis * 2.6}${type}`,
    },
    h3: {
      'font-family': medium,
      'font-size': `${basis * 2}${type}`,
      'line-height': `${basis * 2.1}${type}`,
    },
    h4: {
      'font-family': medium,
      'font-size': `${basis * 1.5}${type}`,
      'line-height': `${basis * 1.6}${type}`,
    },
    h5: {
      'font-family': bold,
      'font-size': `${basis * 1.2}${type}`,
      'line-height': `${basis * 1.3}${type}`,
    },
    h6: {
      'font-family': medium,
      'font-size': `${basis}${type}`,
      'line-height': `${basis}${type}`,
    },
  };
}

export default heading;
