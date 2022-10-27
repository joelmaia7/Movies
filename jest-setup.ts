import "@testing-library/jest-dom";

if (window.document) {
    // @ts-ignore
    delete window.matchMedia;
    window.matchMedia = (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });
  }
  
  window.URL.createObjectURL = jest.fn();

  