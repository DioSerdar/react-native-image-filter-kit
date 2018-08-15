#import <UIKit/UIKit.h>

@interface RNImageCache : NSObject

+ (nullable UIImage *)imageForKey:(nonnull NSString *)key;
+ (void)setImage:(nonnull UIImage *)image forKey:(nonnull NSString *)key;

@end
