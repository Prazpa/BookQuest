import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';


function Shared_btn() {
    
    
    const handleViewClick = () => {
        fetchDetailData()
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger
                    className="bg-[white] rounded-full h-[50px] w-[80px] font-medium hover:bg-accent hover:text-accent-foreground"
                    onClick={handleViewClick}
                >
                    <span className='text-[16px]'>Shared</span>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white overflow-y-scroll">
                    <DialogHeader>
                        <DialogTitle>Shared</DialogTitle>
                        <DialogDescription>
                            {loading && <div>Loading...</div>}
                            {!loading && responseData.map((item, index) => (
                                <div key={index}>
                                    <a href={`${BASE_URL}${item.key}`} target="blank">{BASE_URL}{item.key}</a>
                                </div>
                            ))}
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Shared_btn