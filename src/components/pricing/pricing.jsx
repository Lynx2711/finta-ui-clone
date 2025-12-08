import React from 'react'
import TaxesCard from './taxesCard';
import AccountingCards from './accountingCards';
import Toggle from './toggle';

const Pricing = () => {
  return (
    <>
              <div className='relative flex flex-col mt-20 mb-7 gap-2 justify-center items-center'>
                            <div className='text-[40px] font-medium '>
                        Pricing for <span className='text-blue-600'>inception to scale</span>
                    </div>
                    <div className='text-center text-gray-800'>
                            Transparent and scales with features you use, not your expenses.
                    </div>
                      <div className='w-full lg:max-w-50 '>
                      <Toggle/>
                    </div>
                    <div className='mt-20'>
                          <AccountingCards/>
                    </div>

                    
      </div>
    </>
  )
}

export default Pricing;