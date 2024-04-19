// const asyncHandler=()=>{

// }

export { asyncHandler };

// const asyncHandler=()=>{}
// const asyncHandler=(function)=>{()=>{}}
// const asyncHandler=(fun)=> async()=>{}

const asynchandler = (fn) => async (req, res, next) => {
  try {
  } catch (error) {
    res.status(err.code || 500).json({
      success: false,
      message: err.message,
    });
  }
};
