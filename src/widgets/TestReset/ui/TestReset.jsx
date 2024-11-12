import useTestReset from '@/features/TestReset/model/useTestReset'
import TestResetButton from "@/entities/TestReset/ui/TestResetButton"

const TestReset = () => {
    const {isMobile, handleReset} = useTestReset()
    return <TestResetButton isMobile={isMobile} onReset={handleReset}/>
}

export default TestReset
