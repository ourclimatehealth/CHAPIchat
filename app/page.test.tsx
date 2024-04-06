//
// This source file is part of the Stanford Biodesign Digital Health Next.js Template open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from './page'

describe('Home Component', () => {
  it('renders the Stanford Biodesign Digital Health Next.js Template heading', () => {
    const { getByText } = render(<Home />)

    const headingElement = getByText(
      /Welcome to the Stanford Biodesign Digital Health Next.js Template/i,
    )

    expect(headingElement).toBeInTheDocument()
  })

  it('renders the Stanford Biodesign Logo', () => {
    const { getByAltText } = render(<Home />)

    const imageElement = getByAltText(
      'Stanford Biodesign Logo',
    ) as HTMLImageElement

    expect(imageElement).toBeInTheDocument()
    expect(imageElement.src).toContain('stanfordbiodesign.png')
  })
})
