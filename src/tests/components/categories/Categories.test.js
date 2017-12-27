import React from 'react';
import { shallow } from 'enzyme';
import Categories from '../../../components/categories/Categories';
import * as ReadableAPI from '../../../api/index';


it('the categories must came from an API', () => {
  const mockedAPIResults = [
    {
      name: 'react',
      path: 'react',
    },
    {
      name: 'redux',
      path: 'redux',
    },
    {
      name: 'udacity',
      path: 'udacity',
    },
  ];

  return ReadableAPI.getCategories().then((response) => {
    expect(mockedAPIResults.toEqual(response.json()));
  });
});

it('should render a list of categories as an unordered list', () => {
  const mockCategories = [
    { name: 'Name 1', url: 'url1' },
    { name: 'Name 2', url: 'url2' },
    { name: 'Name 3', url: 'url3' },
  ];
  const wrapper = shallow(<Categories categories={mockCategories} />);
  expect(wrapper.find('li').length).toEqual(mockCategories.length); // 3
});
