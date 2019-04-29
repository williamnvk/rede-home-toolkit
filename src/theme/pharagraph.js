function paragraph({ base, measurer, font: { regular } }) {
  return {
    tiny: {
      'font-family': regular,
      'font-size': `${base * 0.7}${measurer}`,
      'line-height': `${base * 0.8}${measurer}`,
    },
    small: {
      'font-family': regular,
      'font-size': `${base * 0.8}${measurer}`,
      'line-height': `${base * 0.9}${measurer}`,
    },
    regular: {
      'font-family': regular,
      'font-size': `${base * 1}${measurer}`,
      'line-height': `${base * 1.1}${measurer}`,
    },
    large: {
      'font-family': regular,
      'font-size': `${base * 1.25}${measurer}`,
      'line-height': `${base * 1.25}${measurer}`,
    },
  };
}

export default paragraph;
