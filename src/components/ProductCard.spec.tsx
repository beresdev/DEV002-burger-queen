import { describe, test, expect } from 'vitest';
import { render, screen} from '@testing-library/react'
import { ProductCard } from './ProductCard'

describe('Bill test', () => {
    test('should redner Bill component', () => {
        render (
            <ProductCard>
                
            </ProductCard>
        )
    })
})