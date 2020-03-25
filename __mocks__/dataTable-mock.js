export const header = {
  rowData: [
    {
      id: 'itemTitle',
      value: 'Item',
    },
    {
      id: 'itemDescription',
      value: 'Description',
    },
    {
      id: 'priceTitle',
      value: 'Current price',
    },
    {
      id: 'stockTitle',
      value: 'In stock',
    },
  ],
}

export const rows = [
  {
    id: 'row1',
    rowData: [
      {
        id: 'coffeeLabel',
        value: 'Coffee',
      },
      {
        id: 'coffeeDescription',
        value: 'A nice cup of coffee. Hot!',
      },
      {
        isNumeric: true,
        id: 'coffeePrice',
        value: '£2.60',
      },
      {
        id: 'coffeeStock',
        value: 'Yes',
      },
    ],
  },
  {
    id: 'row2',
    rowData: [
      {
        id: 'tvLabel',
        value: 'TV',
      },
      {
        id: 'tvDescription',
        value: '42inch, 4k, widescreen television. Second hand.',
      },
      {
        isNumeric: true,
        id: 'tvPrice',
        value: '£399',
      },
      {
        id: 'tvStock',
        value: 'No',
      },
    ],
  },
  {
    id: 'row3',
    rowData: [
      {
        id: 'guitarLabel',
        value: 'Electric guitar',
      },
      {
        id: 'guitarDescription',
        value:
          'Limited edition electric guitar. Poor condition. Strings need to be changed.',
      },
      {
        isNumeric: true,
        id: 'guitarPrice',
        value: '£260',
      },
      {
        id: 'guitarStock',
        value: 'Yes',
      },
    ],
  },
]
