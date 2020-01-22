export const header = {
  rowData: [
    {
      data: {
        id: 'itemTitle',
        data: 'Item',
      },
    },
    {
      data: {
        id: 'itemDescription',
        data: 'Description',
      },
    },
    {
      data: {
        id: 'priceTitle',
        data: 'Current price',
      },
    },
    {
      data: {
        id: 'stockTitle',
        data: 'In stock',
      },
    },
  ],
};

export const rows = [
  {
    id: 'row1',
    rowData: [
      {
        data: {
          id: 'coffeeLabel',
          data: 'Coffee',
        },
      },
      {
        data: {
          id: 'coffeeDescription',
          data: 'A nice cup of coffee. Hot!',
        },
      },
      {
        isNumeric: true,
        data: {
          id: 'coffeePrice',
          data: '£2.60',
        },
      },
      {
        data: {
          id: 'coffeeStock',
          data: 'Yes',
        },
      },
    ],
  },
  {
    id: 'row2',
    rowData: [
      {
        data: {
          id: 'tvLabel',
          data: 'TV',
        },
      },
      {
        data: {
          id: 'tvDescription',
          data: '42inch, 4k, widescreen television. Second hand.',
        },
      },
      {
        isNumeric: true,
        data: {
          id: 'tvPrice',
          data: '£399',
        },
      },
      {
        data: {
          id: 'tvStock',
          data: 'No',
        },
      },
    ],
  },
  {
    id: 'row3',
    rowData: [
      {
        data: {
          id: 'guitarLabel',
          data: 'Electric guitar',
        },
      },
      {
        data: {
          id: 'guitarDescription',
          data: 'Limited edition electric guitar. Poor condition. Strings need to be changed.',
        },
      },
      {
        isNumeric: true,
        data: {
          id: 'guitarPrice',
          data: '£260',
        },
      },
      {
        data: {
          id: 'guitarStock',
          data: 'Yes',
        },
      },
    ],
  }
]
